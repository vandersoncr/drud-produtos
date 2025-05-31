import { Request, Response } from "express"
import { del, get, post, put } from "../utils/dbApi";
import { Product } from "../types/product";

const index = async (req: Request, res: Response) => {
    const products = await get("products");
    res.render("products/index", {
        products
    });
};

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("products/create");
    }else if(req.method === "POST"){
        const newProduct: Product = req.body;
        await post("products", newProduct);
        res.redirect("/products");
    }
};

const read = async (req: Request, res: Response) => {
    const id = req.params.id;
    const product = await get (`products/${id}`);
    res.render("products/read",{
        product,
    })
};

const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    if (req.method === "GET") {
        const product = await get(`products/${id}`);
        res.render("products/update", { product });
    } else if (req.method === "POST") {
        const updateProduct: Product = req.body;
        await put(`products/${id}`, updateProduct);
        res.redirect("/products");
    }
};

const remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    await del(`products/${id}`);
    res.redirect("/products")
};

export default { index, create, read, update, remove  };


