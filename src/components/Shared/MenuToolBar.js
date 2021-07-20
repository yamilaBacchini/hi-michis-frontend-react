import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";
import classNames from "classnames";

const drawerWidth = 220;

const styles = theme => ({
    root: {
        display: "flex",
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: theme.spacing(2),
    },
    menuButtonIconClosed: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(0deg)"
    },
    menuButtonIconOpen: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(180deg)"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    grow: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
    },
});

class MenuToolBar extends React.Component {
    state = {
        open: false,
        anchorEl: null
    };

    handleDrawerOpen = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    fooJon={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open
                    })}
                    style={{backgroundColor: '#3c0a4a'}}
                >
                    <Toolbar disableGutters={true}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classes.menuButton}
                        >
                            <MenuIcon
                                classes={{
                                    root: this.state.open
                                        ? classes.menuButtonIconOpen
                                        : classes.menuButtonIconClosed
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                            noWrap
                        >
                            Hi Michis
                        </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? "menu-appbar" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open
                        })
                    }}
                    open={this.state.open}
                    onMouseEnter={this.handleDrawerOpen}
                    onMouseLeave={this.handleDrawerClose}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button key="Home" href="/" component="a">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button key="Adoption cats" href="/adoption-cats" component="a">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Adoption cats" />
                        </ListItem>
                        <ListItem button key="Lost and found" href="/lost-and-found-cats" component="a">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lost and found" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

MenuToolBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuToolBar);