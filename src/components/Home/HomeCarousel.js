import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-bootstrap';

/*
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 400,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: '100%',
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      borderRadius: 50,
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.25,
      transition: theme.transitions.create('opacity'),
      borderRadius: 50,
    },
    imageTitle: {
      position: 'relative',
      fontSize: 20,
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
*/

export default function HomeImages() {
    /*
    const classes = useStyles();
    const images = [
        {
            url: props.image,
            title: props.name,
            width: '100%',
        }
    ];
    */
  return (
    <Carousel interval='4000' pause='false'>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="data:image/jpeg;base64,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"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Nombre</h3>
                <p>Edad</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Nombre</h3>
                <p>Edad</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Nombre</h3>
                <p>Edad</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}