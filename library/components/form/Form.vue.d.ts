import { Slot } from 'vue';
import { GenericObject } from 'vee-validate';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { CheckboxModelValue } from '../checkbox/Checkbox.vue.d';

export type FormValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | Record<string, unknown>
  | Record<string, unknown>[];

export type FormPayload<T = Record<string, FormValue>> = {
  stayAfterSubmit: boolean;
  formValues: T;
};

/**
 * Props for Form component
 */
export interface FormProps {
  /**
   * The number of columns per row.
   * @default 1;
   */
  columnPerRow?: number;
  /**
   * The template for form buttons.
   */
  buttonsTemplate?: ('clear' | 'submit' | 'cancel')[];
  /**
   * Custom button submit label.
   */
  submitBtnLabel?: string;
  /**
   * Custom button clear label.
   */
  clearBtnLabel?: string;
  /**
   * Determines if the stay checkbox should be hidden.
   */
  hideStayCheckbox?: boolean;
  /**
   * Prevent form resets after submitted. Default is resetted.
   *
   * @default true
   */
  resetAfterSubmit?: boolean;
  /**
   * Determines if the buttons should be sticky.
   */
  stickyButtons?: boolean;
  hideFooter?: boolean;
  /**
   * Custom submit form validator message.
   */
  validatorMessage?: string;
  /**
   * Invalid form state.
   */
  invalid?: boolean;
}

/**
 * Slots for Form component
 */
export interface FormSlots {
  /**
   * The fields slot for the form. Here is where you can put your form fields.
   */
  fields: Slot<{ formValues: GenericObject; key?: number }>;
}

/**
 * Emits for Form component
 */
export type FormEmits = {
  submit: [values: FormPayload];
  clear: [];
  cancel: [];
};

/**
 * **TSVue v2 - Form**
 *
 * _Form is a component for creating forms with validation on submit using vee-validate.
 * You need to install vee-validate while using this component._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group components
 */
declare class Form extends ClassComponent<FormProps, FormSlots, FormEmits> {
  /**
   * Wether to keep the dialog remains visible or not after submit.
   */
  stayAfterSubmit: CheckboxModelValue;
  /**
   * The ref of form element.
   */
  formElement: HTMLFormElement;
  submit: (e?: Event | undefined) => Promise<void | undefined>;
  /**
   * Clears the form fields.
   */
  clearField: () => void;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Form: GlobalComponentConstructor<Form>;
  }
}

export default Form;