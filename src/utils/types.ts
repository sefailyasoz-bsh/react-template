import type { HttpStatusCode } from "axios";

export type InitialState = {
  isAuthenticated: boolean;
  loading: boolean;
  message: string;
  error: boolean;
  success: boolean;
  dummyArray: Array<string>;
};

export interface APICallResponseType<T> {
  data: T;
  message: string;
  status: HttpStatusCode;
}
export type ErrorType = {
  response: {
    message: string;
  };
};
import React from "react";

// Helpers
//------------------------------------------------------------------------------------------------
export type ReactChildren = React.ReactNode[] | React.ReactNode;

export type Dict<T> = Record<string, T>;

export type Skip<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Skip<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

/**
 * Size variations.
 */
export type SizeVariant = "small" | "medium" | "large";

/**
 * Highlight color variations.
 */
export type HighlightColor = "purple" | "blue" | "turquoise" | "green";
/**
 * Background color variations.
 */
export type BackgroundColor = "primary" | "secondary" | "contrast" | "floating";

/**
 * For polymorph components which are rendered 'as' another element.
 */
export interface AsProp<
  As extends
    | React.ElementType
    | keyof React.JSX.IntrinsicElements = React.ElementType
> {
  as?: As;
}

/**
 * Represents arbitrary slot properties. Only the well-known fields: children, className and style are known.
 * Note: This type should not be used in production. It is only used internally.
 */
export type UnknownSlotProps = Pick<
  React.HTMLAttributes<HTMLElement>,
  "children" | "className" | "style"
> &
  AsProp;

/**
 * Helper that removes from T all nullish types and replaces them with undefined.
 */
export type ReplaceNullWithUndefined<T> = T extends null
  ? Exclude<T, null> | undefined
  : T;
/**
 * A shorthand prop value.
 */
export type SlotShorthandValue =
  | React.ReactNode
  | React.ReactNode[]
  | React.ReactPortal;
/**
 * Helper to union TProps and the shorthand value.
 */
export type WithSlotShorthandValue<TProps> = TProps | SlotShorthandValue;

/**
 * Represents a component`s slot property. Use this type for your component props types.
 */
export type Slot<
  Type extends
    | keyof React.JSX.IntrinsicElements
    | UnknownSlotProps
    | React.ComponentType
    | React.FunctionComponent
> = WithSlotShorthandValue<
  Type extends keyof React.JSX.IntrinsicElements
    ? AsProp<Type> & React.JSX.IntrinsicElements[Type]
    : Type extends React.ComponentType<infer Props>
    ? Props
    : Type
> | null;

/**
 * A React FROK component which forwards a ref to the underlying element.
 */
export interface ReactFrokRefForwardingComponent<
  TElement extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TElement>(
    props: React.PropsWithChildren<ReplaceProps<As, AsProp<As> & P>>,
    context?: unknown
  ): React.ReactNode | null;
  //contextTypes?: React.FunctionComponent['contextTypes'];
  defaultProps?: Partial<P>;
  displayName?: string;
}

export interface OnOpenChangeEmitter {
  /**
   * Flag to indicate the open state of the context menu. Note: If you provide this property
   * you must also provide the 'onOpenChange' event handler in order to have the context menu
   * uncontrolled.
   */
  open?: boolean;
  /**
   * Default open state.
   */
  defaultOpen?: boolean;
  /**
   * Open state change event handler. Note: If you provide this handler you need also to provide the 'open'
   * property.
   */
  onOpenChange?: (open: boolean, ev?: React.SyntheticEvent) => void;
}
