package it.epicode.BW2_EpicEnergyServices.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import it.epicode.BW2_EpicEnergyServices.Entity.Client;
import it.epicode.BW2_EpicEnergyServices.Enums.TurnoverState;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TurnoverDto {


    @NotNull
    @Min(1)

    private Long turnoverCode;
//    @NotNull
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private TurnoverState turnoverState;
    @NotNull
    @Min(1)

    private double total;

    @JsonIgnore
    private Client client;
}
