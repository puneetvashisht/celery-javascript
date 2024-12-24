class Command {
    execute() {}
    undo() {}
  }
  
  class Light {
    turnOn() {
      console.log("Light is ON");
    }
  
    turnOff() {
      console.log("Light is OFF");
    }
  }
  
  class LightOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  
    undo() {
      this.light.turnOff();
    }
  }
  
  class RemoteControl {
    constructor() {
      this.history = [];
    }
  
    executeCommand(command) {
      command.execute();
      this.history.push(command);
    }
  
    undoCommand() {
      const command = this.history.pop();
      if (command) command.undo();
    }
  }
  
  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  
  const remote = new RemoteControl();
  remote.executeCommand(lightOnCommand); // Light is ON
  remote.undoCommand(); // Light is OFF
  