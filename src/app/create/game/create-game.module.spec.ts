import { CreateGameModule } from "./create-game.module";

describe("GameModule", () => {
  let gameModule: CreateGameModule;

  beforeEach(() => {
    gameModule = new CreateGameModule();
  });

  it("should create an instance", () => {
    expect(gameModule).toBeTruthy();
  });
});
