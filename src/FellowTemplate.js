import { 
  Tile, Box, Tag
} from 'bloomer';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

export class FellowTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tile isAncestor isVertical>
                <Tile>
                    <Tile isVertical>
                        <Tile>
                            <Tile isSize={2} isParent>
                                <Tile isChild render={ props => (
                                    <Box {...props}>
                                        { this.props.level()}
                                    </Box>
                                )}/>
                            </Tile>
                            <Tile isParent isVertical>
                                <Tile isChild render={props => (                                    
                                    <Box {...props}>
                                        { this.props.characterName() }
                                    </Box>
                                )} />
                                <Tile isChild render={ props => (                                    
                                    <Box {...props}>
                                        { this.props.playerName() }
                                    </Box>
                                )} />
                            </Tile>
                        </Tile>
                        <Tile isParent>
                            <Tile isChild render={props => (                                
                                <Box {...props}>
                                    { this.props.species()}
                                </Box>
                            )} />
                        </Tile>
                        <Tile isParent>
                            <Tile isChild render={props => (
                                <Box {...props}>
                                    { this.props.sex() }
                                </Box>
                            )} />
                            <Tile isChild render={props => (
                                <Box {...props}>
                                    { this.props.age()}
                                </Box>
                            )} />
                        </Tile>
                        <Tile isParent>
                            <Tile isChild>
                                <Box>
                                    { this.props.skills() }
                                </Box>
                            </Tile>
                        </Tile>
                        <Tile isParent>
                            <Tile isChild>
                                <Box>
                                    { this.props.languages()}
                                </Box>
                            </Tile>
                        </Tile>
                        <Tile isParent>
                            <Tile isChild>
                                <Box>
                                    { this.props.selfIntroduction()}
                                </Box>
                            </Tile>
                        </Tile>
                    </Tile>
                    <Tile isVertical>
                        <Tile isParent>
                            <Tile isChild render={props => (
                                <Box {...props}>
                                    { this.props.image()}
                                </Box>
                            )} />
                        </Tile>
                        <Tile isParent>
                            <Tile isChild render={props =>(
                                <Box {...props}>
                                    { this.props.requireExps()}
                                </Box>
                            )}/>
                            <Tile isChild render={props =>(
                                <Box {...props}>
                                    { this.props.requirePay()}
                                </Box>
                            )}/>
                        </Tile>
                    </Tile>
                </Tile>
                <Tile isParent>
                    <Tile isChild>
                        <Box>
                            { this.props.manaPoint()}
                        </Box>
                    </Tile>
                </Tile>
                <Tile isParent>
                    <Tile isChild>
                        <Box>{ this.props.actions()}</Box>
                    </Tile>
                </Tile>
                <Tile isParent>
                    <Tile isChild>
                        <Box>
                            { this.props.note() }
                        </Box>
                    </Tile>
                </Tile>
            </Tile>
        );
    }
}