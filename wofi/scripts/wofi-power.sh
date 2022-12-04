#!/bin/bash

entries="Logout\nSuspend\nReboot\nShutdown"

selected=$(echo -e $entries|wofi --width 250 --height 210 --dmenu --cache-file /dev/null)

case $selected in
  Logout)
    exec hyprctl dispatch exit x ;;
  Suspend)
    exec systemctl suspend;;
  Reboot)
    exec systemctl reboot;;
  Shutdown)
    exec systemctl poweroff -i;;
esac
echo $selected
