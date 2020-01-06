import React from 'react'
import { ProjectsProvider } from './projects';
import { FilterProvider } from './filter';


function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<ProjectsProvider />, <FilterProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
