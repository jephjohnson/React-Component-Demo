import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './tooltip/';
import Button from './tooltip/components/Button';
import Status from './tooltip/components/Status';
import Tabs from './tabs/';
import TabBody from './tabs/components/TabBody';
import TabPane from './tabs/components/TabPane';

//Tooltip Component
storiesOf('Tooltip Component', module)
  .add('App Component', () => (
    <Tooltip/>
  ))
  .add('Button Component', () => (
    <Button/>
  ))
  .add('Status Component', () => (
    <Status/>
  ));

//Tabs Component
storiesOf('Tabs Component', module)
  .add('App Component', () => (
    <Tabs/>
  ))
  .add('TabBody Component', () => (
    <TabBody/>
  ))
  .add('TabPane Component', () => (
    <TabPane/>
  ));

  