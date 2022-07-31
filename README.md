@flexcodelabs/dropdown

[![npm](https://img.shields.io/npm/v/@flexcodelabs/dropdown)](https://www.npmjs.com/package/@flexcodelabs/dropdown) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/dropdown)](https://www.npmjs.com/package/@flexcodelabs/dropdown)

[Package Name](#@flexcodelabs/dropdown)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)

## Features

- List of features

## Installation

`npm install @flexcodelabs/dropdown`

or

`yarn add @flexcodelabs/dropdown`

## Usage

```js
...
import Dropdown from '@flexcodelabs/dropdown';

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const Children = () => {
    return (
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          width: "200px",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: 16,
            padding: 0,
          }}
        >
          Closes dropdown
        </button>
        <li
          style={{
            backgroundColor: "transparent",
            border: "none",
            listStyle: "none",
            fontSize: 16,
          }}
        >
          List Item
        </li>
      </div>
    );
  };
  const Toggle = (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </div>
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Dropdown
          open="up"
          Toggle={Toggle}
          isOpen={open}
          close={() => setOpen(false)}
        >
          <Children />
        </Dropdown>
      </div>
    </div>
  );
};
/>
```

## Examples

[Source code](https://github.com/flexcodelabs/dropdown)

## Props

| Name           | Type                                                                         | Default | Required | Description                   |
| -------------- | ---------------------------------------------------------------------------- | ------- | -------- | ----------------------------- |
| Toggle         | `ReactNode`                                                                  | null    | true     | Toggle component              |
| children       | `reactNode`                                                                  | null    | true     | Dropdown contents             |
| className      | `string`                                                                     | null    | false    |                               |
| isOpen         | `boolean`                                                                    | null    | false    | dropdown open status          |
| close          | `Func()`                                                                     | null    | false    | close dropdown function       |
| style          | `CSSProperties`                                                              | null    | false    | custom styles                 |
| dropdownstyles | `CSSProperties`                                                              | null    | false    | custom dropdown styles        |
| open           | `left, right, up, down, left-center, down-center, up-center or right-center` | `down`  | false    | open position of the dropdown |
