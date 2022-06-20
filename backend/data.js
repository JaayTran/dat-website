import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jimmy",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Timmy",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Scar Barrel Attachment",
      slug: "attachment_scar_barrel",
      category: "Attachments",
      image: "/images/attachment_Barrel.webp", // 679px × 829px
      price: 7.52,
      countInStock: 0,
      brand: "Personal",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "2",
      name: "Cheekrest Attachment",
      slug: "attachment_cheekrest",
      category: "Attachments",
      image: "/images/attachment_cheekrest.webp", // 679px × 829px
      price: 5.83,
      countInStock: 10,
      brand: "Personal",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "3",
      name: "HandGuard Attachment",
      slug: "attachment_handguard",
      category: "Attachments",
      image: "/images/attachment_Handguard.webp", // 679px × 829px
      price: 13.86,
      countInStock: 10,
      brand: "Commission",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "4",
      name: "Lynx Blaster",
      slug: "blaster_lynx",
      category: "Blaster",
      image: "/images/blaster_lynx.webp", // 679px × 829px
      price: 74.32,
      countInStock: 10,
      brand: "Commission",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "5",
      name: "Caliburn Blaster",
      slug: "blaster_caliburn",
      category: "Blaster",
      image: "/images/blaster_caliburn.webp", // 679px × 829px
      price: 89.97,
      countInStock: 10,
      brand: "Commission",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "6",
      name: "Noble Charm",
      slug: "charm_Noble",
      category: "Charms",
      image: "/images/charm_Noble.webp", // 679px × 829px
      price: 11.97,
      countInStock: 10,
      brand: "Personal",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "7",
      name: "Super Charm",
      slug: "charm_Super",
      category: "Charms",
      image: "/images/charm_Super.webp", // 679px × 829px
      price: 11.97,
      countInStock: 10,
      brand: "Personal",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "8",
      name: "Sweep Charm",
      slug: "charm_Sweep",
      category: "Charms",
      image: "/images/charm_Sweep.webp", // 679px × 829px
      price: 12.97,
      countInStock: 10,
      brand: "Personal",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
