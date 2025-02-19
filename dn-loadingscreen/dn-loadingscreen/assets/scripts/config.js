Config = {}; // Don't touch

Config.ServerIP = "localhost:30120";

// Social media buttons on the left side
Config.Socials = [
    {name: "discord", label: "Discord", description: "Her kan du finde vores discord", icon: "assets/media/icons/discord.png", link: "https://discord.gg/8ZawGBYMHb"},
    {name: "", label: "Hjemmeside", description: "Kommer Snart", link: ""},
];

Config.HideoverlayKeybind = 112 // JS key code https://keycode.info
Config.CustomBindText = "F1"; // leave as "" if you don't want the bind text in html to be statically set

// Staff list
Config.Staff = [
    {name: "YupThatPanda", description: "Ejer/Stifter", color: "#fff", image: "https://cdn.discordapp.com/avatars/234662255579365378/e2744622b8073ccc938fd4ff73f1900b?size=1024"},
//    {name: "justnomnom", description: "Top Grundlægger", color: "#0195FD", image: "https://cdn.discordapp.com/attachments/1135486691059183687/1135494862607753257/tjorben.gif"},
//    {name: "adamjeppesen", description: "Administrator/Server Udvikler", color: "#fff", image: "https://cdn.discordapp.com/attachments/1135486691059183687/1135493542354104400/skyline.gif"},


];

// Categories
Config.Categories = [
    {label: "Social Media", default: true},
    {label: "Staff", default: false}
];

// Music
Config.Song = "song.mp3";