const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="text-4xl font-bold text-[#111111] my-6">Image Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 shadow-xl border rounded-2xl">
        <div className="grid gap-4">
          <div className="">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://treesdirect.co.uk/app/uploads/2018/05/Gertrude-Jekyll-005-278x240.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2020/01/Olympic_Fire_Mountain_Laurel_5G_01-1-340x453.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto  rounded-lg "
              src="https://www.thetreecenter.com/c/uploads/sensitive-fern-1-450x450.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/schipka-cherry-laurel-1-1-450x450.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/rhodendron-chionoides-1-450x450.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2022/06/Umbrella_Tree_3G_01-jpg-340x453.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2022/03/Heuchera_Dolce_Silver_Gumdrop_4-copy-600x600.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2022/06/Calathea_Peacock_1G_01-jpg-340x453.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2022/03/Echinacea_Lakota_Fire_2-copy-600x600.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2022/06/Zig_Zag_Cactus_6in_01-1-jpg-340x453.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://gardengoodsdirect.com/cdn/shop/files/Untitled_design_5e1c6642-7d23-45c4-9e15-3a90c9b95e6e_300x_crop_center.progressive.jpg?v=1677704537"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://gardengoodsdirect.com/cdn/shop/files/hibiscus-summerific-perfect-storm-30607579447338_280x318_crop_center.jpg?v=1695451933"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
