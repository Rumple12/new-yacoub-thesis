# Slide 14 - Raspberry Pi validation

## Point
Show that the action side of the system was validated on separate hardware. n8n stayed on the PC, while the Python middleware/action endpoint ran on Raspberry Pi and was called over the network.

## Slide text
Title:
Raspberry Pi validation

Main:
n8n stayed on the PC.
Python middleware ran on Raspberry Pi.
n8n called the Pi middleware over the network.

Bullets:
- n8n stayed on the PC
- Python middleware ran on Raspberry Pi
- n8n called the Pi middleware over the network
- 31.4 C -> fan_on
- 24.5 C -> fan_off

Limitation:
This validates the action endpoint on separate hardware, not full n8n-on-Pi deployment.

Bottom:
Separate-hardware action endpoint validation, not full n8n-on-Pi deployment.

## Visual
Use:
presentation/assets/tables/table-pi-validation.png

If missing, create this table:
deterministic_high_temp - 31.4 C - expected fan_on - observed fan_on - HTTP 200 - 437.003 ms
deterministic_low_temp - 24.5 C - expected fan_off - observed fan_off - HTTP 200 - 200.206 ms

Optional supporting image:
pi-validation-fan-on-output.png
appendix-pi-terminal-high-temp-fan-on.png
pi-validation-latency-chart.png

## Presenter guidance
Point to the PC/n8n side when explaining that n8n stayed on the PC.
Point to the Raspberry Pi/middleware side when explaining that Python middleware ran on Raspberry Pi.
Point to the network arrow when explaining that n8n called the Pi middleware over the network.
Point to the high-temperature row when explaining 31.4 C to fan_on.
Point to the low-temperature row when explaining 24.5 C to fan_off.
Look back at the audience when saying this validates the action endpoint on separate hardware, not full n8n-on-Pi deployment.

## Possible opponent question
Was n8n running on the Raspberry Pi?

## Answer
No. n8n stayed on the PC. In this validation, the Python middleware and action endpoint ran on the Raspberry Pi. The purpose was to validate that the PC-hosted n8n workflow could call the Pi-hosted action side over the network.

## Possible opponent question
So what exactly did the Raspberry Pi validation prove?

## Answer
It proved that the action endpoint could run on separate hardware and still be called by the workflow. The Pi middleware returned the expected fan_on and fan_off results for the defined high and low temperature cases.
