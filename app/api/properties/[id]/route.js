import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, {params}) => {
  try {
    const {id} = await params;
    await connectDB();
    const property = await Property.findById(id);

    if (!property) {
      return new Response("Property not found", {status: 404});
    }

    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response("Internal Server Error", {status: 500});
  }
};
