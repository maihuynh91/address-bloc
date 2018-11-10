const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController();
      });

  

    describe("#remindMe()", () => {
 
      it("should return expected string", () => {
        expect(this.menu.remindMe()).toEqual("Learning is a life-long pursuit");
      });
      
    });
  });