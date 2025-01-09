<script setup lang="ts">
interface ComponentDoc {
  name: string;
  description: string;
  props?: { name: string; type: string; default?: any; description: string }[];
  slots?: { name: string; description: string }[];
  emits?: { name: string; type: string; description: string }[];
  category: 'UI' | 'Base';
}

let components: ComponentDoc[] = [
  {
    name: 'UiButton',
    category: 'UI',
    description:
      'A versatile button component with different styles, sizes, and icon support.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the button',
      },
      {
        name: 'label',
        type: 'string',
        default: 'Button',
        description: 'Button text',
      },
      {
        name: 'leftIcon',
        type: 'string',
        description: 'Icon name for left side',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Shows loading state',
      },
      {
        name: 'rightIcon',
        type: 'string',
        description: 'Icon name for right side',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: 'medium',
        description: 'Button size',
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline'",
        default: 'primary',
        description: 'Button style',
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        default: 'button',
        description: 'Button Type',
      },
    ],
    slots: [
      { name: 'default', description: 'Default slot for button content' },
      { name: 'loading', description: 'Custom loading indicator content' },
    ],
    emits: [
      {
        name: 'click',
        type: 'MouseEvent',
        description: 'Emitted when button is clicked',
      },
    ],
  },
  {
    name: 'UiSelect',
    category: 'UI',
    description:
      'A dropdown select component with customizable options and placement.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the select',
      },
      {
        name: 'options',
        type: 'any[] | Array<{label: string, icon: string, value: string}>',
        description: 'Array of options to display',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: 'Select',
        description: 'Placeholder text',
      },
    ],
    emits: [
      {
        name: 'select',
        type: 'any',
        description: 'Emitted when an option is selected',
      },
    ],
  },
  {
    name: 'UiDropdown',
    category: 'UI',
    description:
      'A dropdown menu component with customizable trigger and placement options.',
    props: [
      {
        name: 'distance',
        type: 'number',
        default: '6',
        description: 'Distance from trigger element',
      },
      {
        name: 'dropdownWidth',
        type: 'number',
        description: 'Custom width for dropdown menu',
      },
      {
        name: 'options',
        type: 'any[] | Array<{label: string, icon: string, value: any, onSelect?: Function}>',
        default:
          '[{label: \"Option 1\", value: 1}, {label: \"Option 2\", value: 2}]',
        description: 'Array of dropdown options',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-start' | 'left-end' | 'right-start' | 'right-end'",
        default: 'right-start',
        description: 'Dropdown menu placement',
      },
      {
        name: 'selected',
        type: 'number',
        description: 'Index of selected option',
      },
      {
        name: 'trigger',
        type: "'click' | 'hover'",
        description: 'Trigger action for dropdown',
      },
    ],
    slots: [
      { name: 'default', description: 'Custom trigger element content' },
      { name: 'dropdown', description: 'Custom dropdown menu content' },
    ],
    emits: [
      {
        name: 'select',
        type: 'number',
        description: 'Emitted when an option is selected with option index',
      },
    ],
  },
  {
    name: 'UiInput',
    category: 'UI',
    description:
      'A customizable input component with icon support and different types.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the input',
      },
      { name: 'icon', type: 'string', description: 'Icon name to display' },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Input placeholder text',
      },
      {
        name: 'type',
        type: "'text' | 'number' | 'password' | 'email' | 'date'",
        default: 'text',
        description: 'Input type',
      },
    ],
    emits: [
      {
        name: 'blur',
        type: 'any',
        description: 'Emitted when input looses focus',
      },
      {
        name: 'input',
        type: 'any',
        description: 'Emitted when input value changes',
      },
    ],
  },
  {
    name: 'UiMultilineInput',
    category: 'UI',
    description: 'A textarea component with auto-resize capability.',
    props: [
      {
        name: 'autoResize',
        type: 'boolean',
        default: 'true',
        description: 'Enables auto-resizing',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the input',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Input placeholder text',
      },
    ],
    emits: [
      {
        name: 'blur',
        type: 'any',
        description: 'Emitted when input looses focus',
      },
      {
        name: 'input',
        type: 'any',
        description: 'Emitted when input value changes',
      },
    ],
  },
  {
    name: 'UiCheckbox',
    category: 'UI',
    description: 'A checkbox component with label support.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the checkbox',
      },
      { name: 'label', type: 'string', description: 'Checkbox label' },
      { name: 'value', type: 'boolean', description: 'Checkbox state' },
    ],
    emits: [
      {
        name: 'update',
        type: 'boolean',
        description: 'Emitted when checkbox state changes',
      },
    ],
  },
  {
    name: 'UiToggle',
    category: 'UI',
    description: 'A toggle switch component.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the toggle',
      },
      { name: 'value', type: 'boolean', description: 'Toggle state' },
    ],
    emits: [
      {
        name: 'change',
        type: 'boolean',
        description: 'Emitted when toggle state changes',
      },
    ],
  },
  {
    name: 'UiTooltip',
    category: 'UI',
    description: 'A tooltip component with customizable placement and delay.',
    props: [
      {
        name: 'delay',
        type: 'number',
        default: '300',
        description: 'Delay before showing tooltip',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the tooltip',
      },
      {
        name: 'distance',
        type: 'number',
        default: '10',
        description: 'Distance from trigger',
      },
      {
        name: 'placement',
        type: 'string',
        default: 'bottom',
        description: 'Tooltip placement',
      },
      { name: 'title', type: 'string', description: 'Tooltip content' },
    ],
    slots: [
      { name: 'default', description: 'Trigger element content' },
      { name: 'tooltip', description: 'Custom tooltip content' },
    ],
  },
  {
    name: 'UiSliderInput',
    category: 'UI',
    description: 'A slider input component with customizable range.',
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the slider',
      },
      {
        name: 'max',
        type: 'number',
        default: '100',
        description: 'Maximum value',
      },
      {
        name: 'min',
        type: 'number',
        default: '0',
        description: 'Minimum value',
      },
      {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step increment',
      },
    ],
    emits: [
      {
        name: 'change',
        type: 'number',
        description: 'Emitted when value changes',
      },
    ],
  },
  {
    name: 'UiFileUploader',
    category: 'UI',
    description: 'A file upload component with drag and drop support.',
    props: [
      {
        name: 'fileTypes',
        type: 'string[]',
        default: '[]',
        description: 'Allowed file types',
      },
      {
        name: 'maxSize',
        type: 'number',
        description: 'Maximum file size in KB',
      },
      {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Allow multiple file upload',
      },
    ],
    emits: [
      {
        name: 'update',
        type: 'File[]',
        description: 'Emitted when files are selected or dropped',
      },
    ],
  },
  {
    name: 'UiTabs',
    category: 'UI',
    description: 'A tabbed interface component with customizable options.',
    props: [
      {
        name: 'options',
        type: 'any[] | Array<{label: string, icon: string}>',
        description: 'Array of tab options',
      },
    ],
    emits: [
      {
        name: 'select',
        type: 'number',
        description: 'Emitted when a tab is selected with index',
      },
    ],
  },
  {
    name: 'UiModal',
    category: 'UI',
    description: 'A modal dialog component with header support.',
    props: [
      {
        name: 'header',
        type: 'boolean',
        default: 'true',
        description: 'Show modal header',
      },
      { name: 'title', type: 'string', description: 'Modal title' },
    ],
    slots: [
      { name: 'default', description: 'Trigger slot' },
      { name: 'content', description: 'Modal content' },
    ],
  },
  {
    name: 'UiSlideOver',
    category: 'UI',
    description: 'A slide-over panel component.',
    props: [
      {
        name: 'placement',
        type: "'left' | 'right'",
        default: 'right',
        description: 'Panel position',
      },
      {
        name: 'width',
        type: 'number',
        default: '400',
        description: 'Panel width in pixels',
      },
    ],
    slots: [
      { name: 'default', description: 'Trigger slot' },
      { name: 'content', description: 'Panel content' },
    ],
  },
];

const route = useRoute();
</script>

<template>
  <div
    class="bg-white text-neutral-900 flex h-screen dark:bg-neutral-950 dark:text-zinc-50"
  >
    <div
      class="flex w-[300px] border-r border-r-neutral-200 p-2.5 flex-col gap-y-1 text-sm min-w-[300px] overflow-auto dark:border-neutral-800 max-lg:hidden"
    >
      <div class="flex items-center justify-between gap-x-1">
        <span class="font-medium">Components</span><ThemeChanger />
      </div>
      <a
        class="flex min-h-8 rounded pl-2 pr-2 items-center text-sm cursor-pointer transition-all duration-150 gap-x-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        v-for="(component, i) in components"
        :key="component?.name"
        target="_self"
        :href="`#${component?.name}`"
        :class="
          route?.hash === `#${component?.name}`
            ? 'bg-neutral-100 dark:bg-neutral-900'
            : ''
        "
        ><Icon
          class="min-w-3.5 min-h-3.5"
          name="iconoir:component-solid"
          size="13"
        /><span>{{ component?.name }}</span></a
      >
    </div>
    <div class="p-8 flex flex-col grow overflow-auto">
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-4">Component Documentation</h1>
      </div>
      <div class="space-y-12">
        <div
          class="border border-neutral-200 rounded-lg p-6 dark:border-neutral-800"
          v-for="(component, currentIndex) in components"
          :key="component.name"
          :id="component?.name"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold">{{ component.name }}</h2>
            <span
              class="pl-2 pr-2 pt-1 pb-1 text-sm rounded-full"
              :class="
                component.category === 'UI'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
              "
              >{{ component.category }}</span
            >
          </div>
          <p class="text-neutral-600 mb-6 dark:text-neutral-400">
            {{ component.description }}
          </p>
          <div class="mb-6" v-if="component.props?.length">
            <h3 class="text-lg font-medium mb-3">Props</h3>
            <div
              class="border rounded-lg overflow-hidden dark:border-neutral-800"
            >
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-zinc-50 dark:bg-neutral-900">
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Name</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Type</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Default</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-t dark:border-neutral-800"
                    v-for="(prop, currentIndex) in component.props"
                    :key="prop.name"
                  >
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ prop.name }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ prop.type }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ prop.default || '-' }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2">{{ prop.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mb-6" v-if="component.slots?.length">
            <h3 class="text-lg font-medium mb-3">Slots</h3>
            <div
              class="border rounded-lg overflow-hidden dark:border-neutral-800"
            >
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-zinc-50 dark:bg-neutral-900">
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Name</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-t dark:border-neutral-800"
                    v-for="(slot, currentIndex) in component.slots"
                    :key="slot.name"
                  >
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ slot.name }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2">{{ slot.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mb-6" v-if="component.emits?.length">
            <h3 class="text-lg font-medium mb-3">Emits</h3>
            <div
              class="border rounded-lg overflow-hidden dark:border-neutral-800"
            >
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-zinc-50 dark:bg-neutral-900">
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Event</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Type</th>
                    <th class="pl-4 pr-4 pt-2 pb-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-t dark:border-neutral-800"
                    v-for="(emit, currentIndex) in component.emits"
                    :key="emit.name"
                  >
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ emit.name }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2 font-mono text-sm">
                      {{ emit.type }}
                    </td>
                    <td class="pl-4 pr-4 pt-2 pb-2">{{ emit.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-3">Preview</h3>
            <div class="border rounded-lg p-6 dark:border-neutral-800">
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiButton'"
              >
                <UiButton label="Primary" /><UiButton
                  label="Secondary"
                  variant="secondary"
                /><UiButton
                  class="w-[100px]"
                  label="Outline"
                  variant="outline"
                /><UiButton
                  label="With Icon"
                  left-icon="heroicons:bolt"
                /><UiButton
                  label="With Right Icon"
                  right-icon="heroicons:arrow-long-right"
                /><UiButton
                  class="w-[100px]"
                  label="Loading"
                  :loading="true"
                /><UiButton label="Disabled" :disabled="true" />
              </div>
              <div class="w-48" v-if="component.name === 'UiSelect'">
                <UiSelect
                  :options="[
                    { label: 'Option 1', value: 1 },
                    { label: 'Option 2', value: 2 },
                    { label: 'Option 3', value: 3 },
                  ]"
                />
              </div>
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiInput'"
              >
                <UiInput placeholder="Regular input" /><UiInput
                  placeholder="With icon"
                  icon="heroicons:user"
                /><UiInput type="password" placeholder="Password" />
              </div>
              <div class="w-96" v-if="component.name === 'UiMultilineInput'">
                <UiMultilineInput
                  placeholder="Type something..."
                  :auto-resize="false"
                />
              </div>
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiCheckbox'"
              >
                <UiCheckbox label="Unchecked" /><UiCheckbox
                  label="Checked"
                  :value="true"
                /><UiCheckbox label="Disabled" :disabled="true" />
              </div>
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiToggle'"
              >
                <UiToggle /><UiToggle :value="true" /><UiToggle
                  :disabled="true"
                />
              </div>
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiTooltip'"
              >
                <UiTooltip title="Basic tooltip"
                  ><UiButton label="Hover me" /></UiTooltip
                ><UiTooltip placement="right" title="Right tooltip"
                  ><UiButton label="Right"
                /></UiTooltip>
              </div>
              <div class="w-64" v-if="component.name === 'UiSliderInput'">
                <UiSliderInput />
              </div>
              <UiModal v-if="component.name === 'UiModal'"
                ><template #content
                  ><div class="p-4">Modal content goes here</div></template
                ></UiModal
              ><UiSlideOver v-if="component.name === 'UiSlideOver'"
                ><template #content
                  ><div class="p-4">SlideOver content goes here</div></template
                ></UiSlideOver
              >
              <div class="w-96" v-if="component.name === 'UiFileUploader'">
                <UiFileUploader
                  :file-types="['.jpg', '.png', '.pdf']"
                  :max-size="5120"
                />
              </div>
              <div class="w-96" v-if="component.name === 'UiTabs'">
                <UiTabs
                  :options="[
                    { label: 'Tab 1' },
                    { label: 'Tab 2' },
                    { label: 'Tab 3' },
                  ]"
                />
              </div>
              <div
                class="flex gap-x-4 gap-y-4"
                v-if="component.name === 'UiDropdown'"
              >
                <UiDropdown /><UiDropdown
                  placement="top"
                  :options="[
                    { label: 'Edit', icon: 'heroicons:pencil-square' },
                    { label: 'Delete', icon: 'heroicons:trash' },
                  ]"
                /><UiDropdown trigger="hover" placement="bottom"
                  ><UiButton label="Hover me"
                /></UiDropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
