import React, { Component } from 'react';
import { Grid, Table } from 'semantic-ui-react';


class ResultFields extends Component {
    render() {
        return (
            <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column>
                        <Table color="green" inverted>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{this.props.lTARGET2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lBO2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lTARGET1}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lHBO}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lHBO1}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>                                                
                    </Grid.Column>


                    <Grid.Column>
                        <Table color="yellow" textAlign="center" inverted>
                            <Table.Body style={{ color:"black"}}>
                                <Table.Row>
                                    <Table.Cell>Target 2</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BO2</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell> - </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Target 1</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>HBO2</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>HBO1</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>                        
                    </Grid.Column>

                    <Grid.Column>
                        <Table color="red" inverted>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{this.props.rTARGET2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rBO2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rTARGET1}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rHBO}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rHBO1}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>                    
                </Grid.Row>      


                <Grid.Row>
                    <Grid.Column>
                        <Table >
                            <Table.Body>
                                <Table.Row  style={{backgroundColor: 'black', color: 'white'}}>
                                    <Table.Cell>{this.props.lPV}</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell  style={{backgroundColor: '#fbbd08', color: 'white'}}>{this.props.lMS}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column>
                        <Table color="black" inverted textAlign="center">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>PIVOT</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell>M/S</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column>
                        <Table >
                            <Table.Body>
                                <Table.Row  style={{backgroundColor: 'black', color: 'white'}}>
                                    <Table.Cell>{this.props.rPV}</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell  style={{backgroundColor: '#fbbd08', color: 'white'}}>{this.props.rMS}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
{/* 
                    <Grid.Column>
                        <Table color="black" inverted textAlign="center">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>ENTER CP</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column>
                        <Table color="black" inverted textAlign="center">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>PIVOT</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell>M/S</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell>M/S</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell>M/S</Table.Cell>
                                </Table.Row>
                                <Table.Row >
                                    <Table.Cell>M/S</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column> */}
                    
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Table color="green" inverted>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{this.props.lLBO1}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lLBO}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lTARGET1B}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lLBO2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.lTARGET2B}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>


                    <Grid.Column>
                        <Table color="yellow" textAlign="center" inverted>
                            <Table.Body style={{ color:"black"}}>
                                <Table.Row>
                                    <Table.Cell>LBO1</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>LBO2</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Target 1</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell> - </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BO2</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Target 2</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>                        
                    </Grid.Column>

                    <Grid.Column>
                        <Table color="red" inverted>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{this.props.rLBO1}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rLBO}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rTARGET1b}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rLBO2}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>{this.props.rTARGET2b}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>                
            </Grid>
        );
    }
}

export default ResultFields;