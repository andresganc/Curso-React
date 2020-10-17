


/*  
* Diferencias de MakeStyles & WithStyles

1- MakeStyles solo se puede utilizar con componentes de función.
2- WithStyles se puede utilizar con componentes de clase o componentes de función.
3- WithStyles es mas antiguo que MakeStyles
4- Si se va a usar Hooks es recomendable usar MakeStyles, 
    WithStyles tiene un poco de sobrecarga adicional en comparación con makeStyles y delega internamente a makeStyles.
5- Si está personalizando los estilos de un componente Material-UI, withStyleses preferible usarlo a envolverlo con 
    su propio componente únicamente con el propósito de llamar, makeStyles/useStylesya que entonces solo estaría 
    reimplementando withStyles.


* UseStyles
    UseStyles es un gancho para el uso de MakeStyles & WithStyles

    
Ejemplo MakeStyles con Usestyles

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <div className={classes.root} />;
}


*/