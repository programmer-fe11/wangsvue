export default {
  root: ({ props }) => ({
    class: [
      'relative',

      // Flexbox & Alignment
      'flex items-center justify-center',

      // Size
      'w-4 h-4',

      // Shape
      'border-2',
      'rounded-full',

      // Colors
      {
        'text-surface-700 dark:text-white/80':
          props.value !== props.modelValue && props.value !== undefined,
        'bg-white dark:bg-white':
          props.value !== props.modelValue &&
          props.value !== undefined &&
          !props.disabled,
        'bg-general-50 dark:bg-general-50': props.disabled,
        'border-general-100 dark:border-general-100':
          props.value !== props.modelValue &&
          props.value !== undefined &&
          !props.disabled,
        'border-primary-500 dark:border-primary-500':
          props.value == props.modelValue &&
          props.value !== undefined &&
          !props.disabled,
        'border-general-200 dark:border-general-200': props.disabled,
      },

      // Misc
      // 'cursor-pointer',
    ],
  }),
  box: ({ props }) => ({
    class: [
      // Flexbox
      'flex justify-center items-center',

      // Size
      'w-2 h-2',
      'text-sm',
      'font-medium',

      // Shape
      // 'border-2',
      'rounded-full',

      // Transition
      'transition duration-200 ease-in-out',

      // Colors
      {
        'border-general-100 dark:border-general-100':
          props.value !== props.modelValue && props.value !== undefined,
        'border-primary-500 dark:border-primary-400':
          props.value == props.modelValue &&
          props.value !== undefined &&
          !props.disabled,
        'bg-primary-500 dark:bg-primary-400':
          props.value == props.modelValue &&
          props.value !== undefined &&
          !props.disabled,
        'bg-general-200 dark:bg-general-200':
          props.value == props.modelValue &&
          props.value !== undefined &&
          props.disabled,
      },

      // States
      {
        'outline-none outline-offset-0': !props.disabled,
        'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-800 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400':
          !props.disabled,
        // 'opacity-60 cursor-default': props.disabled,
      },
    ],
  }),
  input: ({ props }) => ({
    class: [
      'peer',

      // Size
      'w-full ',
      'h-full',

      // Position
      'absolute',
      'top-0 left-0',
      'z-10',

      // Spacing
      'p-0',
      'm-0',

      // Shape
      'opacity-0',
      'rounded-md',
      'outline-none',
      // 'border-2 border-surface-300 dark:border-surface-700',

      // Misc
      'appareance-none',
      { 'cursor-default': props.disabled, 'cursor-pointer': !props.disabled },
    ],
  }),
  icon: {
    class: 'hidden',
  },
};