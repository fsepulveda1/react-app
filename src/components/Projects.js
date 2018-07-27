import React from 'react';
import {Link} from 'react-router-dom';
import { CardColumns, Container, Pagination, PaginationItem } from 'reactstrap';
import MediaObject from "./MediaObject";
import MyCard from "./Card";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            currentPage: this.props.match.params.page || 1,
            itemsPerPage: 3,
            totalItems: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    getAPIData() {

        let skip = (this.state.itemsPerPage * this.state.currentPage) - this.state.itemsPerPage;
        if(skip >= 0) {
            fetch('http://localhost:3000/api/projects?filter[limit]=' + this.state.itemsPerPage + '&filter[skip]=' + skip)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson,
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/projects/count')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    totalItems: responseJson.count,
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
        this.getAPIData();
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevState.currentPage !== this.state.currentPage)
            this.getAPIData();
    }

    handleClick(page) {
        this.setState({
            currentPage: page,
        });
    }

    render() {
        if(this.state.isLoading) {
            return (<p>Cargando...</p>)
        }
        let projectsData = this.state.dataSource;
        return (
            <Container>
                <h1 className='mt-4'>Proyectos</h1>
                <p>
                    Eveniet est voluptas voluptatem. Sint qui reprehenderit.
                    Dolorem quia cupiditate aliquid illo iusto enim assumenda.
                    Fugit reiciendis deleniti vero eaque illum voluptatum quos laborum.
                    Eius ipsam illum labore error maiores repudiandae quidem.
                    Dolor et quam incidunt.
                </p>
                <ProjectList data={projectsData} />
                <Pager
                    total={this.state.totalItems}
                    perPage={this.state.itemsPerPage}
                    page={this.state.currentPage}
                    onClick={(e)=>this.handleClick(e)}
                />
            </Container>
        );
    }
}

const ProjectList = (props) => {
    return (
        <div>
            <CardColumns>
            { props.data.map(project =>
                <MyCard
                    key={project.id}
                    url_image={project.url_image}
                    title={project.name}
                    description={project.description}
                    url_link={project.url_project}
                    url_detail={'/projects/detail/'+project.id}
                />
            )}
            </CardColumns>
        </div>
    )
};

class Pager extends React.Component {


    render() {

        const RenderPages = () => {
            const pageNumbers = [];
            let current = Number(this.props.page);
            let prev = current - 1;
            let next = current + 1;
            let totalPages = Math.ceil(this.props.total / this.props.perPage);
            let maxPages = 5;
            let start = next < maxPages ?
                1 : next + (current-prev) > totalPages ?
                    (next - maxPages + (totalPages - current) ) : (next - maxPages + (Math.floor(maxPages/2)));

            for(let i = start; i <= totalPages; i++) {
                if(0 === maxPages)
                    break;
                pageNumbers.push(i);
                maxPages--;
            }


            let pages = pageNumbers.map(number =>
                <PaginationItem key={number} active={this.props.page === number}>
                    <Link id={number} onClick={() => this.props.onClick(number)} className='page-link' to={'/projects/'+number}>
                        {number}
                    </Link>
                </PaginationItem>
            );
            pages.unshift(
                <PaginationItem key={'prev'} disabled={prev <= 0}>
                    <Link id={prev} onClick={() => this.props.onClick(prev)} className='page-link' to={'/projects/' + prev}>
                        «
                    </Link>
                </PaginationItem>
            );

            pages.push(
                <PaginationItem key={'next'} disabled={next > totalPages}>
                    <Link id={next} onClick={() => this.props.onClick(next)} className='page-link' to={'/projects/' + next}>
                        »
                    </Link>
                </PaginationItem>
            );

            return pages

        };



        return (
            <Pagination aria-label="Page navigation example">
                <RenderPages/>
            </Pagination>
        );
    }
};