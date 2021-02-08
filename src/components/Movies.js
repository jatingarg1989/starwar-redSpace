
import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import { Card, Grid } from 'semantic-ui-react';

export default function Movies( {data}){
    return (
        <>
            <h1>Movies</h1>
            <Grid columns={1}>
                {data.map((movies, i) => {
                    return (
                        <Grid.Column Key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{movies.title}</Card.Header>
                                    <Card.Description>
                                        <p>Eposide Id: {movies.episode_id}</p>
                                        <p>Director: {movies.director}</p>
                                        <p>Producer: {movies.producer}</p>
                                        <p>Release Date: {movies.release_date}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )

}