
import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets( {data}){
    return (
        <>
            <h1>Planet</h1>
            <Grid columns={1}>
                {data.map((planets, i) => {
                    return (
                        <Grid.Column Key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <p>Rotation Period: {planets.rotation_period}</p>
                                        <p>Orbital Period: {planets.orbital_period}</p>
                                        <p>Diameter: {planets.diameter}</p>
                                        <p>Climate: {planets.climate}</p>
                                        <p>Gravity: {planets.gravity}</p>
                                        <p>Terrain: {planets.terrain}</p>
                                        <p>Surface Water: {planets.surface_water}</p>
                                        <p>Population: {planets.population}</p>
                                      
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