import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" paddingLeft="25%">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subheading">
                        About
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subheading">
                        Sign Up
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subheading">
                        Login
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}


export default NavBar;