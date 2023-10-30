import dynamic from 'next/dynamic';

const DynamicClientComponent = dynamic(
  () => import('../components/client-component/client-component'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Clients() {
  return <DynamicClientComponent />;
}
