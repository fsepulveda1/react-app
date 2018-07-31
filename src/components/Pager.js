import React from "react";
import { Pagination, PaginationItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Pager extends React.Component {


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