export const questions = [
    {
      label: "Temperature:",
      name: "temperature",
      type: "number",
      default: 1.0,
    },
    {
      label: "Gender:",
      name: "gender",
      type: "select",
      options: [
        { value: "", label: "Select gender" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
    },
    {
      label: "Age:",
      name: "age",
      type: "number",
    },
    {
      label: "Sensitivity to caffeine:",
      name: "sensitivity_to_caffeine",
      type: "select",
      options: [
          { value: "", label: "Select sensitivity to caffeine" },
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
          ],
    },
    {
      label: "Time of the day:",
      name: "time_of_the_day",
      type: "select",
      options: [
          { value: "", label: "Select time of the day" },
          { value: "Morning", label: "Morning" },
          { value: "Afternoon", label: "Afternoon" },
          { value: "Evening", label: "Evening" },
      ],
    },
    {
      label: "Pregnancy:",
      name: "pregnancy",
      type: "select",
      options: [
          { value: "", label: "Select pregnancy" },
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
      ],
    },
    {
      label: "Health Consciousness:",
      name: "health_consciousness",
      type: "select",
      options: [
          { value: "", label: "Select health consciousness" },
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
      ],
    },
    {
      label: "Number of drinks consumed per day:",
      name: "number_of_drinks_consumed_per_day",
      type: "number",
    },
    {
      label: "Number of drinks consumed today:",
      name: "number_of_drinks_consumed_today",
      type: "number",
    },
  ];
