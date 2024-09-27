Blockly.Blocks["ytt"] = {
  init: function () {
    this.appendDummyInput().appendField("get YouTube title");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["ytt"] = function (
  block,
  generator
) {
  const code = 'return "wsp";';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
