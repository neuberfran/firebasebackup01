class Device {
  constructor(id, data) {
    this.id = id;
    this.name = data.name;
    this.owner = data.owner;
    this.online = data.online;
    this.type = data.type;
    this.state = data.state;
  }

  /**
   * Return the correct device based on type
   */
  static createDevice(id, data) {
    // Verify device type
    switch (data.type) {
      case 'light':
        return new LightDevice(id, data);
      case 'thermostat':
        return new ThermostatDevice(id, data);
      default:
        throw new Error(`Invalid device type found in ${id}: ${data.type}`);
    }
  }

  /**
   * Construct device state payload from the given Assistant commands
   */
  static stateFromExecution(execution) {
    const state = {};
    execution.forEach(item => {
      switch (item.command) {
        case 'action.devices.commands.OnOff':
          state['value.on'] = item.params.on;
          break;
        case 'action.devices.commands.BrightnessAbsolute':
          state['value.brightness'] = item.params.brightness
          break;
        case 'action.devices.commands.ThermostatTemperatureSetpoint':
          state['value.setpoint'] = item.params.thermostatTemperatureSetpoint;
          break;
        case 'action.devices.commands.ThermostatSetMode':
          state['value.mode'] = item.params.thermostatMode;
          break;
        default:
          throw new Error(`Invalid command received: ${item.command}`);
      }
    });

    return state;
  }
};

/**
 * Traits for a light device
 */
class LightDevice extends Device {
  get metadata() {
    return {
      id: this.id,
      type: 'action.devices.types.LIGHT',
      traits: [
        'action.devices.traits.OnOff',
        'action.devices.traits.Brightness'
      ],
      name: {
        name: this.name
      },
      willReportState: true
    };
  }

  get reportState() {
    return {
      online: this.online,
      on: this.state.on,
      brightness: this.state.brightness
    };
  }
};

/**
 * Traits for a thermostat device
 */
class ThermostatDevice extends Device {
  get metadata() {
    return {
      id: this.id,
      type: 'action.devices.types.THERMOSTAT',
      traits: [
        'action.devices.traits.TemperatureSetting'
      ],
      attributes: {
        availableThermostatModes: 'off,heat,cool',
        thermostatTemperatureUnit: 'C'
      },
      name: {
        name: this.name
      },
      willReportState: true
    };
  }

  get reportState() {
    return {
      online: this.online,
      thermostatMode: this.state.mode,
      thermostatTemperatureSetpoint: this.state.setpoint,
      thermostatTemperatureAmbient: this.state.ambient
    };
  }
};

module.exports = Device;