import React from 'react';

// reactstrap components
import { Button, UncontrolledTooltip } from 'reactstrap';

function Example() {
  return (
    <>
      <Button
        color="primary"
        data-placement="top"
        id="tooltip198087688"
        size="sm"
        type="button"
      >
        <a className="link">EMAW</a>
      </Button>
      <UncontrolledTooltip delay={0} placement="top" target="tooltip198087688">
        Every Man A Warrior!
      </UncontrolledTooltip>
      {/* <Button
        color="primary"
        data-placement="right"
        id="tooltip299782200"
        size="sm"
        type="button"
      >
        Tooltip on right
      </Button>
      <UncontrolledTooltip
        delay={0}
        placement="right"
        target="tooltip299782200"
      >
        Tooltip on right
      </UncontrolledTooltip>
      <Button
        color="primary"
        data-placement="bottom"
        id="tooltip457917317"
        size="sm"
        type="button"
      >
        Tooltip on bottom
      </Button>
      <UncontrolledTooltip
        delay={0}
        placement="bottom"
        target="tooltip457917317"
      >
        Tooltip on bottom
      </UncontrolledTooltip>
      <Button
        color="primary"
        data-placement="left"
        id="tooltip877016198"
        size="sm"
        type="button"
      >
        Tooltip on left
      </Button>
      <UncontrolledTooltip delay={0} placement="left" target="tooltip877016198">
        Tooltip on left
      </UncontrolledTooltip> */}
    </>
  );
}

export default Example;
