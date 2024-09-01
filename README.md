# EraPicker

`EraPicker` is a flexible and user-friendly date and time picker component for React Native and web applications. Designed to provide a seamless experience across multiple platforms, including Android, iOS, and Web, `EraPicker` makes it easy to integrate date and time selection into your applications.

## Features

- **Cross-Platform Compatibility**: Works on Android, iOS, and Web with consistent performance and user experience.
- **Customizable Formats**: Easily customize date, time, and timestamp formats to match your application's needs.
- **Flexible Modes**: Supports various modes including date, time, timestamp, and date range selection.
- **Responsive Design**: Adapts to different screen sizes and orientations for a smooth experience on all devices.
- **Easy Integration**: Simple to set up and integrate into your existing React Native or web projects.

## Compatibility

| Platform | Supported |
|----------|-----------|
| Android  | ✔️        |
| iOS      | ✔️        |
| Web      | ✔️        |

The `EraPicker` component is fully compatible with Android, iOS, and Web platforms, ensuring a seamless experience across different devices and environments.

## Preview
![EraPicker Demo](https://imgur.com/4drgauo.gif)
![EraPicker Demo](https://imgur.com/gDbgeQu.gif)
![EraPicker Demo](https://imgur.com/Wi4wGLx.gif)
![EraPicker Demo](https://imgur.com/eyF3dDs.gif)

## Installation

```
npm install era-picker --save
```

## `EraPicker` Component Parameters

The `EraPicker` component accepts several parameters that control its behavior. Depending on the `mode` selected, some parameters are mandatory or optional. Below is a breakdown of each parameter and its requirements.

| Parameter         | Description                                                                                    | Required for `date`, `time`, `timestamp` mode | Required for `range_date` mode | Type       |
| ----------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------ | ---------- |
| `defaultDate`     | The default date to be displayed when the picker opens.                                        | Optional                                      | Optional                       | `Date`     |
| `datePicked`      | The currently selected date.                                                                   | **Required**                                  | Optional                       | `Date`     |
| `setDatePicked`   | Function to update the selected date. Must be a state setter function.                         | **Required**                                  | Optional                       | `Function` |
| `startDate`       | The start date for the range selection.                                                        | Not required                                  | **Required**                   | `Date`     |
| `setStartDate`    | Function to update the start date for the range selection. Must be a state setter function.    | Not required                                  | **Required**                   | `Function` |
| `endDate`         | The end date for the range selection.                                                          | Not required                                  | **Required**                   | `Date`     |
| `setEndDate`      | Function to update the end date for the range selection. Must be a state setter function.      | Not required                                  | **Required**                   | `Function` |
| `setShowCalendar` | Function to control the visibility of the calendar component. Must be a state setter function. | **Required**                                  | **Required**                   | `Function` |
| `mode`            | The mode of the picker (`date`, `time`, `timestamp`, or `range_date`).                         | **Required**                                  | **Required**                   | `String`   |
| `options`         | Configuration object that allows customization of formats, translations, and labels.           | Optional                                      | Optional                       | `Object`   |

### `mode` Parameter

- **`date`**: Select a specific date.
  - **Required Parameters**: `datePicked`, `setDatePicked`, `setShowCalendar`
- **`time`**: Select a specific time.
  - **Required Parameters**: `datePicked`, `setDatePicked`, `setShowCalendar`
- **`timestamp`**: Select both date and time.
  - **Required Parameters**: `datePicked`, `setDatePicked`, `setShowCalendar`
- **`range_date`**: Select a date range.
  - **Required Parameters**: `startDate`, `setStartDate`, `endDate`, `setEndDate`, `setShowCalendar`
  - **Optional Parameters**: `datePicked`, `setDatePicked`

### Example Usage

```js
<EraPicker
  defaultDate={new Date()}
  datePicked={datePicked}
  setDatePicked={setDatePicked}
  setShowCalendar={setShowCalendar}
  mode="timestamp"
  options={options}
/>
```

In range_date mode, the configuration would look like this:

```js
<EraPicker
  defaultDate={new Date()}
  startDate={startDate}
  setStartDate={setStartDate}
  endDate={endDate}
  setEndDate={setEndDate}
  setShowCalendar={setShowCalendar}
  mode="range_date"
  options={options}
/>
```

**Note**: `datePicked`, `setDatePicked`, `setShowCalendar`, `startDate`, and endDate should all be managed as state variables in your React component to ensure proper functionality.

## Basic Usage

```js
import EraPicker from "era-picker";
import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { format } from "date-fns";

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [datePicked, setDatePicked] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setShowCalendar((prevValue) => !prevValue)}
        color="#302f34"
        title={
          datePicked
            ? format(datePicked, "dd/MM/yyyy HH:mm:ss")
            : "Selecione uma data"
        }
      />

      {showCalendar && (
        <EraPicker
          defaultDate={new Date()}
          datePicked={datePicked}
          setDatePicked={setDatePicked}
          setShowCalendar={setShowCalendar}
          mode="timestamp"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
});
```

## `options` Parameters

The `options` object allows for various customizations within the `EraPicker` component. Below are the available parameters:

- **`date_format`**: _(string)_ - Specifies the format for displaying dates. Follows the `date-fns` format pattern. Default is `'yyyy/MM/dd'`.

  ```js
  date_format: "dd-MM-yyyy";
  ```

- **`timestamp_format`**: (string) - Specifies the format for displaying timestamps, including date and time. Follows the date-fns format pattern. Default is 'yyyy/MM/dd HH:mm:ss'.

  ```js
  timestamp_format: "MM/dd/yyyy HH:mm";
  ```

- **`time_format`**: (string) - Specifies the format for displaying time. Follows the date-fns format pattern. Default is 'HH:mm:ss'.

  ```js
  time_format: "HH:mm";
  ```

- **`months`**: (array of strings) - A list of month names to be displayed in the picker. Default is an array of English month names.

  ```js
  months: ['January', 'February', 'March', ...]
  ```

- **`daysOfWeek`**: (array of strings) - A list of day names to be displayed in the picker. Default is an array of English day names.

  ```js
  daysOfWeek: ['Sunday', 'Monday', 'Tuesday', ...]
  ```

- **`translation`**: (object) - Provides translations for specific labels within the picker. You can define your own labels in different languages.

  ```js
  translation: {
      Date: 'Fecha',
      Time: 'Hora',
      Cancel: 'Cancelar',
      Confirm: 'Confirmar'
    }
  ```

### Example Usage

Here’s an example of how you might configure the options object:

```js
const options = {
  date_format: "dd/MM/yyyy",
  timestamp_format: "dd/MM/yyyy HH:mm",
  time_format: "HH:mm",
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  daysOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  translation: {
    Date: "Data",
    Time: "Hora",
    Cancel: "Cancelar",
    Confirm: "Confirmar",
  },
};
```

You can then pass this options object to the EraPicker component:

```js
<EraPicker options={options} />
```

## Contributing

We welcome contributions to EraPicker! If you have suggestions or improvements, please check out the Contributing Guidelines.

## Author
[Daniel Cassiano](https://github.com/cassiano07)

## License

EraPicker is open source and available under the MIT License.