import { createSignal } from "solid-js";
import { Title } from "@solidjs/meta";

import { ProductList } from "~/components/products/ProductList";
import { ProductCategories } from "~/components/products/ProductCategories";
import { products } from '~/fakedata/productsData';

export function ProductsPage() {
  const [searchResults, setSearchResults] = createSignal(products);
  return (
    <>
      <Title>Products | Marketplace</Title>
      <div class="flex flex-row text-center justify-around text-secondary bg-white gap-0">
        <ProductCategories />
        <ProductList products={searchResults()} />
      </div>
    </>
  );
}
