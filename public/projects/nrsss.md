# Design Overview

This section provides an overview of the hardware specifications and electronic design used for the inputs and outputs of the project.

## Parts Used

The following is a list of critical components used in the Interactive Story Book (ISB) project. Specific part numbers are not provided as they may vary depending on individual implementations and user requirements.

```
- Raspberry Pi 3 Model B
- 5V 10000mAh Battery Bank
- 2 USB outputs (1.4A for driving output devices, 2A for Pi)
- 5x 3.5mm audio jack bulkhead connections
- 1x 5V DC USB fan
- USB plug on end replaced with 3.5mm audio jack
- 1x USB A bulkhead connection
- 1x USB A Male to Micro USB male (short cable)
- 1x USB A to USB A Cable
- 1x panel mount momentary switch
- 1x USB A male to any
- Cable cut and positive+negative wires exposed for later use
- Various prototyping wires
- Veroboard
- Lots of 3.5mm stereo cables (to be cut and attached to prototyping wires, outputs)
- 2-5x small vibration pads
- 4x 5A relay modules (or a 4-in-1 5V relay module)
- 2x 3.5mm male to male audio jacks (for connecting vibration mat and PowerLink output)
- 2x 3.5mm male output switches (can be custom made or store-bought)
```

## Default Pinout Connections for Pi

The following table shows the default pinout connections used in the software (configurable in settings.py). Note that the pin numbers refer to the actual pins on the Raspberry Pi, not the GPIO numbers referenced in settings.py.

```
| Pin | Connection                   |
|-----|------------------------------|
| 4   | 5v VCC on relay controller   |
| 6   | GND connection relay controller |
| 36  | Primary Switch +             |
| 38  | Secondary switch +           |
| 34  | Common GND secondary and primary switch |
| 37  | Signal for fan relay         |
| 35  | Signal for vibration mat relay |
| 33  | Signal for vibration rotor relay |
| 31  | Signal for Powerlink relay   |
| 40  | Shutdown switch +            |
| 39  | Shutdown switch -            |
```


# Software Specifications

This section outlines the software specifications for the project, focusing on the JSON tags used in the implementation. The abridged version of the JSON file used in our implementation is analyzed below, providing a high-level overview.

## Environment Overview

The project was implemented to run on a Raspberry Pi 3B+ using the Pygame library. As outlined below, the internal logic for this game was specified by user created JSON files which determined the story structure, physical feedback, sound effects, and length.

## Global Settings

The global settings define various parameters for the Interactive Story Book (ISB). These parameters include the speed of narration, default page, and sound effects.

```json
{
    "globals": {
        "narration_speed": "normal",
        "start_page": "1",
        "page_transition_sound": "page_turn.wav"
    }
}
```

## Starting Page

The starting page contains the title and introductory narration for the ISB. It also includes a button to proceed to the next page.

```json
{
    "title": "Welcome to the Interactive Story Book!",
    "sound_narration": "welcome.wav",
    "buttons": [
        {
            "index": 1,
            "frames": 4,
            "image": "assets/img/buttons/next.png",
            "location": [960, 600],
            "text": "Next",
            "sound_hover": "next_page.wav",
            "effects": {
                "selected_sound": "page_turn.wav",
                "output": ""
            }
        }
    ]
}
```

## Page Transition

The page transition occurs when the user reaches the end of a page and wants to proceed to the next one. It includes a bell sound and a button to turn the page.

```json
{
    "title": "",
    "playback": 1,
    "narration_speed": "normal",
    "sound_narration": "bell.wav",
    "effects": {
        "selected_sound": "page_turn.wav",
        "turn_page": "yes",
        "not_random": "Yes",
        "sound_narration": "turn_page.wav"
    },
    "buttons": [
        {
            "name": "start",
            "frames": 4,
            "image": "assets/img/buttons/start.png",
            "location": [960, 615],
            "text": "Next page",
            "sound_hover": "next_page.wav",
            "effects": {
                "selected_sound": "page_turn.wav",
                "not_random": "Yes"
            }
        }
    ]
}
```

## Story Pages

The story pages consist of buttons that lead to different options based on user selections. Each page has an associated title, narration sound, and buttons.

```json
{
    "title": "My Story is about a",
    "sound_narration": "story1page1.wav",
    "BeginningOpt1Beg": "Yes",
    "buttons": [
        {
            "index": 0,
            "frames": 4,
            "location": [450, 530],
            "image": "assets/img/buttons/jetski.png",
            "text": "Baby",
            "sound_hover": "baby.wav",
            "effects": {
                "selected_sound": "baby.wav",
                "output": ["vibe_mat","custom"]
            }
        },
        {
            "index": 1,
            "frames": 4,
            "image": "assets/img/buttons/jetski.png",
            "location": [450, 530],
            "text": "Alien",
            "sound_hover": "alien.wav",
            "effects": {
                "selected_sound": "alien.wav",
                "output": ["fan","custom"]
            }
        }
    ]
}
```

## End of the Game

At the end of the game, there is a readback of the created story. The following page represents one of the readback pages, which should be present in the JSON file in the appropriate quantity based on the story's length.

```json
{
    "title": "",
    "playback": 0,
    "buttons": [
        {
            "name": "start",
            "frames": 4,
            "location": [960, 615],
            "image": "assets/img/buttons/play_again.png",
            "text": "Play Again",
            "sound_hover": "next_page.wav",
            "effects": {
                "selected_sound": "page_turn.wav",
                "turn_page": "yes",
                "not_random": "Yes",
                "sound_narration": "turn_page.wav"
            }
        }
    ]
}
```

These are the main software specifications in the abridged JSON file. More detailed specifications and additional pages can be included based on the requirements of the Interactive Story Book project.

## Project Management Approach

The project was developed using an Agile project management methodology to ensure flexibility and efficient collaboration throughout the development process. The following details provide an overview of the project management style used to deliver the Interactive Story Book (ISB) project:

- **AGILE Project Development**: The project followed Agile principles, emphasizing iterative development, continuous feedback, and adaptability to changing requirements.

- **Three 4-Week Sprints**: The development process was divided into three 4-week sprints. Each sprint focused on specific tasks and deliverables, allowing for a systematic and manageable approach to development.

- **End User Testing**: Usability was a key factor in the project, and end user testing was conducted between sprints. This allowed for early feedback and validation of the ISB's usability, ensuring that it met the needs and expectations of the target audience.

- **Team Velocity**: The team monitored their velocity throughout the project to track their progress and evaluate their efficiency. Velocity measures the amount of work completed in each sprint, providing insights into the team's productivity and helping with future sprint planning.

- **Burndown Chart**: A burndown chart was used to visualize the progress of the project over time. It displayed the remaining work (in story points or tasks) versus the time left in the sprint, helping the team to track their progress and identify any potential delays or bottlenecks.

- **Trello**: Trello, a popular project management tool, was utilized to manage and track tasks, create user stories, and facilitate communication among team members. It provided a visual representation of the project board, allowing for easy collaboration and organization.

By adopting an Agile project management approach, conducting end user testing, monitoring team velocity, utilizing burndown charts, and leveraging tools like Trello, the project team ensured efficient development and delivery of the Interactive Story Book, while maintaining a focus on usability and meeting the project's objectives.
