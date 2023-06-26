import { createContext, useState, ReactNode } from "react";

interface CountryContextValue {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const CountryContext = createContext<CountryContextValue | null>(null);

interface Props {
  children: ReactNode;
}

const CountryProvider = ({ children }: Props) => {
  const [country, setCountry] = useState<string>("in");

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
