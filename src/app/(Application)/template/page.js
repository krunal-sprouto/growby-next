import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href={"/template/create"} className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-emerald-600 transition-colors">Create Template</Link>
    </div>
  );
}

export default page;