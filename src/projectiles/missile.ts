import { Tank }         from "../tank.js";
import { Vector } from "../vector.js";
import { Projectile }   from "./projectile.js";


export class Missile extends Projectile {

    public vector : Vector;

    constructor(tank : Tank) {
        super("missile", tank)
        this.fireRate = 2000
        this.vector = tank.Position
    }

    public update(): void {
        super.update();
        // this.position = this.vector;
    }
}