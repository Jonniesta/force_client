import React from 'react';
import { Container } from 'reactstrap';

type ExtraProps = {
    sessionToken?: any;
}

class Extra extends React.Component<ExtraProps, {}> {

    render() {
        return (
            <div>
                <Container id="extrahelp">
                <h1>Extra Help</h1>
                <p>If you're reading this, hello. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet eius sit magnam eligendi in temporibus odit deleniti debitis quia culpa molestias architecto illo inventore assumenda, repudiandae earum dignissimos sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum, libero iusto sed praesentium ullam laborum porro accusamus dignissimos deleniti atque consectetur optio qui ea natus debitis, cupiditate eum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati voluptate unde magnam debitis recusandae ut voluptatem sapiente vitae. Quo et iusto officiis magnam similique delectus voluptates maxime quod vero?
                </p>
                </Container>
            </div>
        )
    }
}

export default Extra;