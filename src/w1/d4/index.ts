// Interface: BaseUser（id, name）を継承して Staff（id, name, employeeId）を作成してください。

interface BaseUser {
  id: number;
  name: string;
}

interface Staff extends BaseUser {
  employeeId: number;
}

// Generics: 引数に渡した値をそのまま返す関数 identity を作成してください（どんな型を渡しても型情報が維持されるように）。

const identity = <T>(arg: T): T => {
  return arg;
}

// 課題A：Generics と 配列
// 引数として「ある型の配列」を受け取り、その「最初の要素」を返す関数 getFirst を作成してください。
// 配列が空の場合は undefined を返すようにしてください。
// ヒント：戻り値の型は T | undefined になります。

const getFirst = <T>(arr: T[]): T | undefined => {
  return arr[0];
}

// 課題B：Interface と 配列
// 以下の Product インターフェースを持つオブジェクトの配列から、指定したカテゴリの製品だけを抽出する関数 filterByCategory を作成してください。

interface Product {
  id: number;
  name: string;
  category: "electronics" | "clothing";
}

const filterByCategory = (products: Product[], category: "electronics" | "clothing"): Product[] => {
  return products.filter(product => product.category === category);
}