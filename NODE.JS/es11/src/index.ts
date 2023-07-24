import Express from "express";
import { Request, Response } from "express";
import Joi from "joi";

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const port = 3000;
const app = Express();
app.use(Express.json());

app.get("/api/planets", (req: Request, res: Response) => {
  res.status(200).json(planets);
});
app.get("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.filter((p) => p.id === Number(id));

  res.status(200).json(planet);
});

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

app.post("/api/planets", (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res.status(400).json({ msg: validateNewPlanet.error });
  } else {
    planets = [...planets, newPlanet];
    res.status(200).json({ msg: "The Planet was created" });
  }
});

app.put("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ msg: "The Planet was updated" });
});

app.delete("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));

  res.status(200).json({ msg: "The Planet  was deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
