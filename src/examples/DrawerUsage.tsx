import { Drawer } from "@/components/Drawer";

const DrawerUsage = () =>  {
  return (
    <div className="flex">
      <Drawer />
      <main className="flex-1 p-8 bg-neutral-50">
        <h1 className="text-h4">Main Content</h1>
      </main>
    </div>
  );
}
export default DrawerUsage;