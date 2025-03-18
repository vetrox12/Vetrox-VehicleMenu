fx_version 'cerulean'
game 'gta5'
author 'Vetrox / https://discord.gg/jc3bxNTD9Y'
description 'Vetrox-VehicleMenu'
version '1.0.0'

ui_page 'nui/Vetrox.html'

shared_script {
    '@ox_lib/init.lua',
    'shared/*.lua',
}

client_script {
    'client/*.lua',
}

files {
    'nui/**',
    'client/modules/*lua',
    'shared/modules/*lua',
}

lua54 'yes'