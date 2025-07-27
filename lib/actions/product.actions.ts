'use server'
import {ConvertToPlainObject} from "@/lib/utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

//Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return ConvertToPlainObject(data);
}
