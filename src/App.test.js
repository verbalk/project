import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// Multiselect with deselect example
<Component
  initialState={{
    options: [
      'Apple',
      'Apricot',
      'Banana',
      'Cherry',
      'Cucumber',
    ].map((label) => ({ label, value: label })),
    selected: [],
  }}
>
  {({ state, setState }) => (
    <SelectMenu
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={(item) => {
        const selected = [...state.selected, item.value];
        const selectedItems = selected;
        const selectedItemsLength = selectedItems.length;
        let selectedNames = '';
        if (selectedItemsLength === 0) {
          selectedNames = '';
        } else if (selectedItemsLength === 1) {
          selectedNames = selectedItems.toString();
        } else if (selectedItemsLength > 1) {
          selectedNames = selectedItemsLength.toString() + ' selected...';
        }
        setState({
          selected,
          selectedNames,
        });
      }}
      onDeselect={(item) => {
        const deselectedItemIndex = state.selected.indexOf(item.value);
        const selectedItems = state.selected.filter(
          (_item, i) => i !== deselectedItemIndex
        );
        const selectedItemsLength = selectedItems.length;
        let selectedNames = '';
        if (selectedItemsLength === 0) {
          selectedNames = '';
        } else if (selectedItemsLength === 1) {
          selectedNames = selectedItems.toString();
        } else if (selectedItemsLength > 1) {
          selectedNames = selectedItemsLength.toString() + ' selected...';
        }
        setState({ selected: selectedItems, selectedNames });
      }}
    >
      <Button>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>;
