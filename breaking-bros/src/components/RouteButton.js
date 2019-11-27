
import React from 'react';
import { history, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

/**
 * Button for changing routes
 */
export const RouteButton = withRouter(({ history, ...props }, route, text) => (
  <Button
    color={props.color}
    variant={props.variant}
    onClick={() => {
      history.push(props.route);
    }}
  >
    {props.text}
  </Button>
));