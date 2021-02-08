
import React from 'react'; 
// import {Menu, Container} from 'semantic-ui-react';
import { Card, Grid } from 'semantic-ui-react';

export default function People( {data}){
    return (
        <>
            <h1>People</h1>
            <Grid columns={1}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column Key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <p>Height: {people.height}</p>
                                        <p>Mass: {people.mass}</p>
                                        <p>Hair color: {people.hair_color}</p>
                                        <p>Skin Color: {people.skin_color}</p>
                                        <p>Eye Color: {people.eye_color}</p>
                                        <p>Birth Year: {people.birth_year}</p>
                                        <p>Gender: {people.gender}</p>
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