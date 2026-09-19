devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    0,
    SuperBitV2.enMotors.M3,
    0
    )
})
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    0,
    SuperBitV2.enMotors.M3,
    0
    )
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    最高轉彎速度,
    SuperBitV2.enMotors.M3,
    -1 * 最高速限
    )
})
devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    0,
    SuperBitV2.enMotors.M3,
    0
    )
})
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    0,
    SuperBitV2.enMotors.M3,
    0
    )
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    -1 * (最高速限 * 速度校正),
    SuperBitV2.enMotors.M3,
    -1 * 最高速限
    )
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    最高速限 * 速度校正,
    SuperBitV2.enMotors.M3,
    最高速限
    )
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    SuperBitV2.MotorRunDual(
    SuperBitV2.enMotors.M1,
    -1 * 最高速限,
    SuperBitV2.enMotors.M3,
    最高轉彎速度
    )
})
let 速度校正 = 0
let 最高轉彎速度 = 0
let 最高速限 = 0
bluetooth.startLEDService()
最高速限 = 200
最高轉彎速度 = 70
速度校正 = 98 / 70
