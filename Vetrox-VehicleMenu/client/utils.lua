--- @param action string
--- @param data any
function SendNUIEvent(action, data)
    SendNUIMessage({
        action = action,
        data = data
    })
end

-- Vetrox https://discord.gg/jc3bxNTD9Y