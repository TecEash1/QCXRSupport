/**
 * @file Own No Buttons.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */

const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");

module.exports = {
	id: "own_no",

	async execute(interaction, message) {
		await interaction.update({ embeds: [login_embeds.own_no], components: [buttons.restart] });
		return;
	}
};
