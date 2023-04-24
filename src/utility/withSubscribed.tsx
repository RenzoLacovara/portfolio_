type OriginalProps = { name: string };
type ExtendedProps = OriginalProps & { isSubscribed: boolean };
export default function withSubscribed(
  OriginalComponent: React.ComponentType<OriginalProps>
) {
  const WithSubscribed = (props: ExtendedProps) => {
    const { isSubscribed } = props;
    if (!isSubscribed) return <div>No estas subscrito</div>;
    return <OriginalComponent {...props} />;
  };
  return WithSubscribed;
}

// const SubscribedComponent = withSubscribed(Component);
