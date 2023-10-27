import React, { ErrorInfo, ReactNode } from 'react';

interface GreeterDefaultProps {} // для декларации свойств по умолчанию
export interface GreeterProps extends GreeterDefaultProps {
  children: ReactNode | ReactNode[]; // указываем что children могут принадледжать к единичному типу или множеству составляющего тип ReactNode
} // для декларации обязательных свойств + экспорт интерфейса
interface GreeterState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
} // для декларации состояния

// создаем псевдонимы для readonly типов представляющих...
type DefaultProps = Readonly<GreeterDefaultProps>; // ... статическое поле defaultProps
type Props = Readonly<GreeterProps>; // ... поле props
type State = Readonly<GreeterState>; // ... поле state

export default class ErrorBoundary extends React.Component<Props, State> {
  public static readonly defaultProps: DefaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    // Normally, just render children
    return this.props.children;
  }
}
