export async function getBase64ImageUrl(imageId: string) {
  const res = await fetch(
    `https://res.cloudinary.com/dskypy0xt/image/upload/w_100/e_blur:1000,q_auto,f_webp/${imageId}`
  );
  const buffer = await res.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/webp;base64,${data}`;
}
